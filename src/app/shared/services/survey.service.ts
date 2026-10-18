import { supabase } from "./supabase";

export async function pushToSupabase(surveyData: any) {
    console.count('pushToSupabase pozvan');
    const { data, error } = await supabase
        .from('Surveys')
        .insert([
            { description: surveyData.description, title: surveyData.survey_name, end_date: surveyData.end_date }
        ]).select()
    console.log('Supabase data:', data);
    console.log('Supabase error:', error);
}