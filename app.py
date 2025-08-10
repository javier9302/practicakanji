import json

from logic.stories_logic_API import stories_run
from logic.audios_logic import audio_text_function, audio_generator 
from logic.template_decoration import stars_creator, text_in_html_div
# Level to stars mapping

#Variables definidas por sistema
texts_path = 'data.json'
#Variables definidas por usuario

topic="Self-development" \
""
start=0 #Definido por el usuario
end=2+start #Se define para parar cuando se completen 3 niveles porque esto es lo que cabe en las hojas.

# Ejecutar stories con la información asignada
stories_run(texts_path, topic, "" )

# Retrieve the information from the JSON file
with open(texts_path, "r") as f:
    data=json.load(f)

# New variables to create the HTML template and decoration

texts=data[topic]
folder_name=topic
levels=list(texts.keys())
levels=levels[start:end+1]

stars_creator(start,end,levels,texts)

#Dejar los textos que quiere el usuario en la guía filtrando solo por los que tengan estrellas
filtered_texts={
    key:value
    for key, value in texts.items()
    if "stars" in value
}

#Crear el DIV dinámico con cada texto
content=text_in_html_div(filtered_texts)
print(content)
html_template =f"""
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>A4 Safe PDF</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="/static/styles.css"
    />
  </head>
  <body>
    <div class="header">
      <h1>My Custom Header</h1>
      <img src="/static/logo.png" class="logo" />
    </div>

    <div class="subheader">
      <img src="/static/icon_reading.png" />
      <h2>Reading</h2>
    </div>
    <div class="section">
      {content}
    </div>
  </body>
</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_template)

text_result=audio_text_function(filtered_texts)
print(text_result)

input("Press Enter to continue...")
audio_generator(text_result, folder_name)

