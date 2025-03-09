const about_me_link = document.getElementById('_aboutMe');

about_me_link.onclick = () => {
  console.log('About Me is clicked');
};

const skills_css = document.getElementById('skills');

window.onresize = () => {
  console.log(window.innerWidth);
  if (window.innerWidth <= 992) {
    skills_css.style =
      'border-bottom: 0.75px solid black; margin-bottom: 10px;';
  } else {
    skills_css.style = 'border-right: 0.75px solid black;';
  }
};
