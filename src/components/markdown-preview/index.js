import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import style from './index.module.scss'

function MarkdownPreview() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <main>
      <section className={style.markdown}>
        <textarea
          className={style.input}
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        ></textarea>
        <article className={style.reslut}>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default MarkdownPreview