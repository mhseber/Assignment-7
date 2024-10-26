
const HButton = () => {
    return (
        <div className="flex justify-between pt-10 ">
            <h1 className="w-62 h-9 font-bold text-3xl pl-3">Available Players</h1>
            <div className="pr-3 ">
                <button className="btn hover:bg-yellow-300 border border-yellow-900 mr-2">Available</button>
                <button className="btn hover:bg-yellow-300 border border-yellow-900">Selected (0)</button>
            </div>
        </div>
    );
};

export default HButton;