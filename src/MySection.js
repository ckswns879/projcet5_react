import imgHTML from './images/html.png';
import imgcss from './images/CSS.png';
import imgjs from './images/js.png';
import imgreact from './images/react.png';



function MySection(probs) {
console.log(probs.h1);
/* probs에 따라 if 문장으로구분*/
let imgName = null;

if (probs.h1 === 'HTML') imgName = imgHTML
else if (probs.h1 === 'css') imgName = imgcss
else if (probs.h1 === 'js') imgName = imgjs
else if (probs.h1 === 'react') imgName = imgreact

/*probs에 따라 object로 구분*/
const pContent = { 
    'HTML' : 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용 ',
    'css' : 'Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어',
    'js' : '웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원',
    'react' : '사용자 인터페이스를 만들기 위한 JavaScript 라이브러리',

}
    return (
        <section >
        <div>
            <img src={imgName} alt={probs.h1} />
        </div>
        <div className="content">
            <h1>{probs.h1}</h1>
            <p>{pContent[probs.h1]}</p>
    </div>
</section>
    );
}

export default MySection;