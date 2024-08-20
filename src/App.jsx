function App() {
  return (
    <div className="container max">

        <div className="container-1 b-rad bg animate-container-1" id="container-1">
            <div className="container-1-1 h-max">

                <div className="container-1-1-1 w-max f-c h-auto no-view-button-1">
                    <h1 className="remove">Portfolio</h1>
                    <div className="minimize-button">
                        <i className="fas fa-square-minus icons"></i>
                    </div>
                </div>
                <div className="container-1-1-2 w-max f-c h-auto rel remove">
                    <div className="container-search w-max">
                        <input type="search" className="search w-max" placeholder="Search..."/>
                        <i className="fas fa-search search-icon"></i>
                    </div>
                </div>

                <div className="container-1-1-3 w-max">
                    {/* <!-- icons will display here using js! --> */}
                </div>
            </div>

        </div>

        <div className="container-2 b-rad bg">
            <div className="container-2-1 h-max">
                <div className="container-special w-max f-c h-auto no-view-button">
                    {/* <!-- expand button --> */}
                    <div className="minimize-button-1" onClick={openNav}>
                        <i className="fas fa-expand icons"></i>
                    </div>
                    <div className="button-contact">
                        <button onClick={sendEmail}>
                            <h1>Contact Now!</h1>
                        </button>
                    </div>
                </div>
                <div className="with-buttons"></div>
            </div>
            {/* <!-- pages will load here --> */}
        </div>
        {/* <!-- Change of plans --> */}
        <div className="container-3 b-rad bg animate-container-2">
            <div className="container-3-1 w-max h-max">
                <div className="button-contact">
                    <button onClick={sendEmail}>
                        <h1>Contact Now!</h1>
                    </button>
                </div>
                <div className="container-3-1-1 w-max h-auto">
                    <div className="group1">
                        {/* <!-- insert icon --> */}
                    </div>
                    <div className="group2">
                        <div className="label"></div>
                        <div className="details"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
