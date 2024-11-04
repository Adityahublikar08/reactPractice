export const Practices=()=>
{
    const students=[1,2];

    return(
        // <h1>Interview Questions</h1>
        <>
        {/* <p>{students.length===0 && "no students found"}</p> */}
        {/* <p>{!students.length && "no students found"}</p> */}
        <p>{Boolean(students.length) && "no students found"}</p>
        <p>Number off Students:{students.length}</p>
        </>
    );
  
}

// export default Practices;