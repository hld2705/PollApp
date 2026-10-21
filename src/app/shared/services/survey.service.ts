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
        ]).select()
    console.log('Supabase data:', data);
    console.log('Supabase error:', error);
    console.log('Supabase id:', category);
}