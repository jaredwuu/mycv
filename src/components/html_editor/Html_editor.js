import { useState ,useEffect} from 'react';
import Editor from './Editor'
function Html_editor() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() =>{
      setSrcDoc(`
        <html> 
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    },500)
    return () =>clearTimeout(timeout)
  }, [html,css,js])

  return (
    <div className="w-full">
      <div className="flex px-10 py-3 bg-gray-900">
        <Editor
          language="xml"
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />
      </div>
      <div className = 'bg-yellow-100 h-screen'>
        <iframe
          srcDoc = {srcDoc}
          title='output'
          sandbox="allow-scripts"
          frameBorder="0"
          width = '100%'
          height = '100%'  
        />
      </div>
    </div>
  );
}

export default Html_editor;
