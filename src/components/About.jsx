import React from 'react'

function About() {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className=' max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>

            </div>
            <p className=' text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam veritatis consectetur non officiis impedit numquam soluta dignissimos asperiores distinctio, dolores neque, error aperiam quo ducimus delectus! Deleniti delectus at quo eveniet fuga voluptatibus vero quaerat unde laborum dolore? Accusamus beatae nobis id labore minus perspiciatis asperiores, animi earum sint aliquam?</p>
            <br/>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia itaque mollitia aspernatur hic assumenda accusantium porro blanditiis distinctio sequi. Deserunt ad quo expedita voluptate enim, a velit pariatur quos? Vel mollitia veritatis sunt distinctio, suscipit obcaecati perferendis. Dolores praesentium illo perferendis dolore, facilis cumque? Vel nisi perspiciatis ratione dolorum autem!</p>
        </div>
    </div>
  )
}

export default About