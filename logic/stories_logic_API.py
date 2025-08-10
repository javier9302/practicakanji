import json
import os
from azure.ai.inference import ChatCompletionsClient
from azure.ai.inference.models import SystemMessage, UserMessage
from azure.core.credentials import AzureKeyCredential


file_path = 'data.json'

level_pos={

        1:"beginner",
        2:"pre-intermediate",
        3:"intermediate",
        4:"upper-intermediate",
        5:"advanced",
        6:"native"
    }


endpoint = "https://models.github.ai/inference"
model = "cohere/cohere-command-a"
token = os.environ["GITHUB_TOKEN"]

def create_header(topic,level):
    client = ChatCompletionsClient(
    endpoint=endpoint,
    credential=AzureKeyCredential(token),
    )    
    response = client.complete(
                model=model,
                messages=[
                    SystemMessage("""
                                          Your job is to write a short header that is going to serve as a topic to produce a texts in English. Use precise, clear language and vocabulary appropriate for the specified level. Imitate human-like writing without creating complex, overloaded structures. Your responses should consist only of the story or text, without extra details, greetings, or explanations. Keep your answers simple, easy to understand, and in line with the level given. If the user has a specific structure that they want to practice, make sure you use that structure in the texts.
                Adding any greetings, instructions or other text different than the text requested is forbidden, the output should be the only the text or story requested.
                """),
                UserMessage(f"""Write the title about this topioc: {topic}. Length: between 2 and 10 words. English level: {level}. Keep the result simple and clear for another AI to use it and understand the text""")
                ])
    result=response.choices[0].message.content
    print(result)
    return result
def create_story(topic,level, structure):
    
    client = ChatCompletionsClient(
    endpoint=endpoint,
    credential=AzureKeyCredential(token),)

    response = client.complete(
            model=model,
            messages=[SystemMessage("""Your job is to write stories and produce texts in English. Use precise, clear language and vocabulary appropriate for the specified level. Imitate human-like writing without creating complex, overloaded structures. Your responses should consist only of the story or text, without extra details, greetings, or explanations. Keep your answers simple, easy to understand, and in line with the level given. If the user has a specific structure that they want to practice, make sure you use that structure in the texts.
            Adding any greetings, instructions or other text different than the text requested is forbidden, the output should be the only the text or story requested. Do not repeat the topic as a header, print the text without header."""),
            UserMessage(f"Write a text about {topic}. Length: between 200 and 250 words. English level: {level}. Structure to practice: {structure}. Keep the sentence clear, simple, and appropriate for non-native speakers at the specified level.")]
        )
    result=response.choices[0].message.content
    print(result)
    return result

def story_loop(topic_given,structure):
    level_pos={

        1:"beginner",
        2:"pre-intermediate",
        3:"intermediate",
        4:"upper-intermediate",
        5:"advanced",
        6:"native"
    }
    levels=list(level_pos.values())
    text_level={}
    
    for item in levels:
        text_created={}
        text_created["title"]=create_header(topic_given, item)
        topic_modified=text_created["title"]
        text_created["body"]=create_story(topic_modified,item, structure)
        text_level[item]=text_created
    return text_level

def stories_run(file_path, topic,structure):
    if structure =="":
         structure="any"

    with open(file_path, 'r') as f:
            data = json.load(f)
    data[topic]=story_loop(topic,structure)

    with open(file_path, 'w') as f:
            json.dump(data, f, indent=4) 


create_story("Medieval Era", "Intermediate", "Phrasal verbs")

