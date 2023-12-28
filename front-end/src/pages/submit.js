function submit() {
    return (
        <div>
        <h1>Submit your posts here</h1>
        <form action="/api/addPost" method="Post" encType="multipary/form-data">
            <input
                name="title"
                type="text"
                placeholder="title"
                required
            />
            <br></br>
            <input
                name="description"
                type="text"
                placeholder="enter your description here"
                required
            />
            <br></br>
            <select name="cateogory">
                <option value="placeHold" disabled>cateogory</option>
                <option value="locomotives">locomotives</option>
                <option value="layouts">layouts</option>
                <option value="custom locomotives">custom locomotives</option>
                <option value="scratch built locomotives">scratch built locomotives</option>
            </select>
            <select name="scale">
                <option value="placeHold" disabled>scale</option>
                <option value="N scale">N scale</option>
                <option value="HO scale">HO scale</option>
                <option value="O scale">O scale</option>
                <option value="S scale">S scale</option>
                <option value="Large scale">large scale</option>
            </select>
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default submit;