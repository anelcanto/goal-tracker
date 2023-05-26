

export default function Goal(props) {
    return (
        <>  
        {/* // add props.title to the h2 element */}
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </>
    );
}









