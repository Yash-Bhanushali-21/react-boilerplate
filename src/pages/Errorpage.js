import errorpageCSS from './styles/errorpage.module.css';

const Errorpage = () => {
    return(
        <div className = {errorpageCSS.wrapper}>
        <h1>404, not found !</h1>
        </div>
    )
}

export default Errorpage;