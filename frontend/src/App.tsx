import './App.css'

function App() {

  return (
    <div className="background-div h-screen w-screen">
      <div className='h-full w-full backdrop-blur-div flex justify-center items-center'>
        <div className="rounded-2xl z-10 shadow-lg bg-transparent/75 border w-fit m-[50px] px-[100px] py-[80px]">
          <h1 className="font-bold">Matthew Yang</h1>

          <p>Just a temporary website</p>

          <p>In the meantime, check out <a href="https://vocaloidle.matthewyang.tech/">Vocaloidle: A Vocaloid Heardle</a></p>
        </div>
      </div>
    </div>
  )
}

export default App
