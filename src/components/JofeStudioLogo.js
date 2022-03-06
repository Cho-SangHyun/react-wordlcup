import logo from '../logo.png';
import './JofeStudioLogo.css';

function JofeStudioLogo(){
    return(
        <div className="logo-section">
            {/* 밑의 rel속성을 주지 않으면 보안 오류가 생김. */}
            <a target="_blank" rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UCliZta14y5eCWjNjndkSCJg">
                <img id="JofeStudioLogo" src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default JofeStudioLogo;