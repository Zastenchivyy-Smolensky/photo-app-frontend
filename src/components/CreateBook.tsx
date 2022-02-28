import React, { useCallback, useState } from 'react'
import axios from 'axios'  //add

const CreateBook: React.FC = () => {
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState<File>()

  const selectImage = useCallback((e) => {
    const selectedImage = e.target.files[0]
    setLabel(selectedImage)
  }, [])

  const createFormData = () => {          //add
    const formData = new FormData()
    if (!label) return                    //labelがundefinedの場合早期リターン
    formData.append('book[title]', title) // ポイント1！
    formData.append('book[label]', label) // ポイント1！
    return formData
  }

  const sendFormData = async () => {      // ポイント2！
    const url = 'http://localhost:8000/books'
    const data = await createFormData()   //formdataが作成されるのを待つ
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.post(url, data, config)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })

  }

  return (
    <div>
　　　<h1>書籍を登録</h1>
      <label>タイトル：<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      <input type="file" onChange={(e) => selectImage(e)}/>
      <button onClick={sendFormData}>送信</button>
    </div>
  )
}

export default CreateBook