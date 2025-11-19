from fastapi import FastAPI
from pydantic import BaseModel

class Post(BaseModel):
    txt : str

app = FastAPI()

@app.post("/save_comment/{comment_id}")
def save_comment(comment_id : int, post : Post):
    with open(f'data/{comment_id}','w') as fout:
        fout.write(post.txt)

@app.get("/get_comment/{post_id}")
def get_comment(comment_id : int) -> str:
    liens = ""
    with open(f'data/{comment_id}','r') as fin:
        lines = fin.readlines()
    return " ".join(lines)