import { supabase } from "./supabase";

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
    //console.log('Supabase data:', data);
    /*console.log('Supabase error:', error);
    console.log('Supabase id:', category);*/

}

export async function pushQuestionsToSupabase(surveyData: any, surveyId: number) {
    surveyData == await supabase
        .from('Questions')
        .insert([
            {
                text: surveyData.questions[0].question,
                multiple_answers: surveyData.questions[0].multiple_answers,
                survey_id: surveyId
            }
        ]).select('id')

    console.log('Question and surveyid:', surveyId)
    /*const questionId: number = data![0].id;

    const { data } = await supabase
        .from('Answers')
        .insert([
            {
                question_id: questionId,
                text: surveyData.answers[0].answer
            }
        ])*/
}