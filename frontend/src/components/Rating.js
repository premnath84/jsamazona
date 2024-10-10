
// Rating object has render method - using this it exports the content within
// render method has only one argument i.e. props. however two properties i.e. value and text are passed in an object (ref HomeScreen.js) as a single argument - so this is valid in JavaScript

const Rating = {
    render: (props) => {
        if (!props.value){
            return `<div> </div>`;
        }
        return `
        <div class = 'rating'>
            <span>
                <i class = "${props.value >=1? 'fa fa-star': props.value >=0.5? 'fa fa-star-half-o': 'fa fa-star-o'}">
                </i>
            </span>
               <span>
                <i class = "${props.value >=2? 'fa fa-star': props.value >=1.5? 'fa fa-star-half-o': 'fa fa-star-o'}">
                </i>
            </span>
               <span>
                <i class = "${props.value >=3? 'fa fa-star': props.value >=2.5? 'fa fa-star-half-o': 'fa fa-star-o'}">
                </i>
            </span>
               <span>
                <i class = "${props.value >=4? 'fa fa-star': props.value >=3.5? 'fa fa-star-half-o': 'fa fa-star-o'}">
                </i>
            </span>
               <span>
                <i class = "${props.value >=5? 'fa fa-star': props.value >=4.5? 'fa fa-star-half-o': 'fa fa-star-o'}">
                </i>
            </span>
            <span> ${props.text || ''} </span>
        </div>
        `;
    },
};

export default Rating;