

def stars_creator(start,end,levels,texts):
    for level in levels:
        if start>end: 
            return texts
        texts[level]["stars"] = "★" * (start+1)
        start+=1
    return texts


def text_in_html_div(texts):
    div_content=""
    for items in texts:
        title=texts[items]["title"]
        stars=texts[items]["stars"]
        body=texts[items]["body"]
        header= f"""<h3>{title} <span class="stars">{stars}</span></h3>"""
        body=body.replace('\n','<br />')
        content=f"""<p>{body}</p>
      <hr />
        """
        div_content=div_content+header+content
    return div_content

