import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Documents = () => {
  return (
    <div>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
          <p className='document-title'> This is Fake Title</p>
        </div>
      </Header>
      <Editor />
    </div>
  )
}

export default Documents