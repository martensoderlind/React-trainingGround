import './header.css';

const MyHeader = ({view: setView})=>{
    return (
        <div className="header font-bold bg-blue-950 text-amber-400" >
            <div className="logo" onClick={()=>setView('home')}>
                <h1>Träningsstatistik</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 36 36"><path fill="#8899a6" d="m24.161 10.166l-.676-2.034a.564.564 0 0 0-.781-.275c-.918.487-2.944 1.318-3.684 1.575c1.419.505 3.499 1.503 4.511 1.396c.384-.04.787-.308.63-.662m10.21 24.574c-.399.225-6.509 1.692-18.621-8.906C12.083 22.625 1.2 12.879 1.341 12.547c0 0-.329.36-.602.736c-.197.271-.319.559-.274.848c.31 1.967 3.112 3.819 6.962 6.781l.549.422l.363.279c.588.452 2.316 1.815 4.329 3.403c2.753 2.171 8.284 6.49 8.445 6.61c2.12 1.574 4.635 2.817 7.667 3.672c3.838 1.081 5.591-.558 5.591-.558"/><path fill="#be1931" d="M34.371 34.74s.477-.219.97-.918s.79-1.924.045-3.248c-.745-1.323-3.456-5.121-4.345-6.671c-.433-.755-.297-1.447-1.125-2.835c0 0-3.164-5.523-3.864-6.723c-1.497-2.567-.84-3.902-1.837-4.668c-.665-.511-7.306.166-9.327-1.389c-1.397-1.074-1.418-4.428-2.003-5.526c-.466-.875-2.02-.475-3.087.11S5.825 6.661 5.123 7.574s-1.601 1.909-1.679 2.928l-.079 1.018S19.226 26.67 23.74 29.726c7.697 5.211 10.631 5.014 10.631 5.014"/><path fill="#a0041e" d="M24.74 10.464c-.103-.314-.249-.575-.525-.788c-.665-.511-7.306.167-9.327-1.389c-1.397-1.074-1.418-4.429-2.003-5.526c-.182-.341-.532-.485-.952-.502c.69 1.4.621 5.574 2.312 6.874c2.038 1.569 8.016 1.133 10.495 1.331"/><path fill="#dd2e44" d="M13.265 17.873c.505-1.472 1.044-4.915.074-6.962c-.909-1.917-4.441-5.955-5.112-6.72C6.987 5.296 5.33 7.229 4.83 7.879c-.66.858-1.455 1.822-1.494 2.801c-.014.352.087.51.087.51s9.822 6.741 9.842 6.683"/><path fill="#ccd6dd" d="M23.107 14.256a.838.838 0 0 1-.306-1.62l1.823-.715a.84.84 0 0 1 .613 1.562l-1.823.715a.9.9 0 0 1-.307.058m1.347 3.063a.838.838 0 0 1-.419-1.566l1.793-1.031a.839.839 0 0 1 .836 1.454l-1.793 1.031a.83.83 0 0 1-.417.112m1.821 2.752a.838.838 0 0 1-.502-1.511l1.514-1.129a.84.84 0 0 1 1.002 1.345l-1.514 1.128a.83.83 0 0 1-.5.167m1.945 2.571a.84.84 0 0 1-.532-1.488l1.155-.948a.84.84 0 0 1 1.065 1.297l-1.155.948a.84.84 0 0 1-.533.191M3.2 10.76s.675.612 1.425.726s2.079.95 2.993 1.653s4.399 3.292 6.534 5.444s5.495 6.58 6.801 7.863c1.306 1.282 3.413 3.193 5.214 4.347s3.455 2.131 4.516 2.686c1.368.716 2.632 1.144 3.688 1.261c-.368.216-2.313.946-5.69-.205c-3.228-1.101-5.332-2.294-7.071-3.586S10.402 22.141 8.851 20.948s-6.188-4.728-6.92-5.787c-1.04-1.504-.99-2.162-.788-2.424c.492-.641 1.531-2.382 2.057-1.977"/><path fill="#dd2e44" d="M35.386 30.574c-.745-1.323-3.456-5.121-4.345-6.671c-.174-.304-.257-.599-.347-.931c-.091.034-.189.054-.269.109c-1.154.792-1.148 3.185.571 5.687c1.378 2.006 3.59 3.552 4.832 3.576c.026-.538-.088-1.142-.442-1.77"/></svg>
            </div>
            <div>
                <button className="headerbutton color-amber-400" onClick={()=>setView('prevRuns')}>
                    Tidigare Pass
                </button>
                <button className="headerbutton" onClick={()=>setView('plannedRuns')}>
                    Planerade Pass
                </button>
            </div>
        </div>
    );
}

export default MyHeader;