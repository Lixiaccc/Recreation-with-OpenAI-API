import OpenAI from 'openai';


const openai = new OpenAI({
  organization: 'org-UEpEWqV3hmNIu7A0dDfX2RnF',
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message){
  const res = await openai.completions.create({
    model:'text-davinci-003',
    prompt: message,
    temperature: 0.5,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return res.choices[0].text;
}