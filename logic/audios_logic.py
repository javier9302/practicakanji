import os
import asyncio
import edge_tts

def audio_text_function(texts):
  audio_text=[]
  for items in texts:
    level=items
    title=texts[items]["title"]
    body=texts[items]["body"]
    content= title + "\n" + body
    tuple_element=(content,level)
    audio_text.append(tuple_element)
  return audio_text

def audio_generator(texts,folder_name):
  
  voices = [ ("en-US-AndrewMultilingualNeural", "american-male-voice"),
            ("en-US-AvaMultilingualNeural", "american-female-voice"),
            ("en-GB-RyanNeural", "brittish-male-voice"),
            ("en-GB-SoniaNeural", "brittish-female-voice"),]

  async def generate_audios(folder_name):

      
      os.makedirs(folder_name, exist_ok=True)
      
      # Create subfolders for American and British accents
      american_folder = os.path.join(folder_name, 'American')
      british_folder = os.path.join(folder_name, 'British')
      
      os.makedirs(american_folder, exist_ok=True)
      os.makedirs(british_folder, exist_ok=True)

      for text, prefix in texts:
          for voice, suffix in voices:
              # Determine which folder to save the file in
              if "en-US" in voice:  # American accent
                  save_folder = american_folder
              elif "en-GB" in voice:  # British accent
                  save_folder = british_folder
              
              filename = f"{prefix}-{suffix}.mp3"
              file_path = os.path.join(save_folder, filename)
              
              print(f"Generating: {filename} with {voice} -> Saving to: {file_path}")
              
              # Generate and save the audio
              communicate = edge_tts.Communicate(text=text, voice=voice)
              await communicate.save(file_path)


  # Run the asynchronous function
  asyncio.run(generate_audios(folder_name))


