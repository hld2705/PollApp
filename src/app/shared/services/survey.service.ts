import { supabase } from "./supabase";

/**
 * Takes all the gathered data from angular forms, forwards id to pushQuestionsToSupabase and pushes all of the gathered data to supabase
 */
export async function pushToSupabase(surveyData: any) {
    let { data: category } = await supabase
        .from('Categories')
        .select('id')
        .eq('name', surveyData.category)
    const { data, error } = await supabase
        .from('Surveys')
        .insert([
            {
                description: surveyData.description,
                title: surveyData.survey_name,
                end_date: surveyData.end_date,
                category_id: surveyData.category_id,
                category_name: surveyData.category_name
            }
        ]).select('id')
    const surveyId: number = data![0].id;
    await pushQuestionsToSupabase(surveyData, surveyId)
}

/**
 * Takes id from the column questions, forwards it to answers and pushes it to supabase
 */
export async function pushQuestionsToSupabase(surveyData: any, surveyId: number) {
    const { data, error } = await supabase
        .from('Questions')
        .insert([
            {
                text: surveyData.questions[0].question,
                multiple_answers: surveyData.questions[0].multiple_answers,
                survey_id: surveyId
            }]).select('id');
    if (error) throw error;
    const questionId = data[0].id;
    for (const answer of surveyData.questions[0].answers) {
        await supabase
            .from('Answers')
            .insert([
                {
                    question_id: questionId,
                    text: answer
                }
            ]);
    }
}