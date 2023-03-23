import React from 'react'
import Card from './Card'

export default function Result({results}) {
    // console.log(results)
  return (
    <div className='max-w-6xl mx-auto '>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mx-3'>
        {
            results.map((result)=>(
                <Card key={result.id} result={result}>

                </Card>
            ))
        }
    </div>
    </div>
  )
}
