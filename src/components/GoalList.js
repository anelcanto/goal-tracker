import Goal from "./Goal";

export default function GoalList() {
    return (
        <>
        {/* Generate threee goals with a good title and children elements */}
            <Goal title="Learn React">
                <p>React is a JavaScript library for building user interfaces.</p>
            </Goal>
            <Goal title="Learn JSX">
                <p>JSX is a syntax extension to JavaScript.</p>
            </Goal>
            <Goal title="Build a React App">
                <p>React can be used to build single page applications.</p>
            </Goal>            
        </>
        );
}