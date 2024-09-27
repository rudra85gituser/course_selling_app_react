//we are using the tags made by us inside the main tags
function App() 
{
  return
   (
   <>
   hi there
   <TodoApp></TodoApp>
   <NameApp></NameApp>
   
   <AgeApp text={"we can send sata from one tag to another using props"}></AgeApp>
   </>
   )
}
//we can create html tags of our own
function TodoApp(){
    return 
    (
        <TodoApp>this is a app</TodoApp>
    )
}
function NameApp()
{
    return 
    (
        <NameApp>Rudra Yadav</NameApp>
    )
}

//we can send sata from one tag to another using props
function AgeApp(props)
{
    reutrn
    (
    <div>{props.text}</div>
    )
}
export default App
  