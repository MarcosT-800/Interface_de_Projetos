import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .container{
	position: relative;
	display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	flex-wrap: wrap;
	z-index: 1;
}

.container .card1{
	position: relative;
	width: 350px;/*A largura dos cards*/
	height: 300px;/*altura dos cards*/
	margin: 30px;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1); 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
}
.container .card1 .content{
	padding: 20px;
	text-align: center;
	transform: translateY(100px);
	opacity: 0;
	transition: 0.5s;
}

.container .card1:hover .content{
    transform: translateY(0px);
    opacity: 1;
}

.container .card1 .content h2 {
	position: absolute;
	top: -80px;
	right: 30px;
	font-size: 8em;
	color: rgba(255, 255, 255, 0.05);
	pointer-events: none;
}

.container .card1 .content h3 {
  font-size: 1.8em;
  color: #fff;
  z-index: 1;
}
.container .card1 .content p {
	font-size: 1em;
	color: #fff;
	font-weight: 300;
}

.container .card1 .content a{
	position: relative;
	display: inline-block;
	padding: 8px 20px;
	margin-top: 15px;
	background: #FFF;
	color: #000;
	text-decoration: none;
	border-radius: 20px;
	font-weight: 500;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

}
  `

  export const Header = styled.div`
    width: 100vw;
    height: 7vh;
    background: white;
    display: flex;
    justify-content: space-between;


     img:hover {
       transform: rotate(360deg);
       transition-duration: 1s;
       animation: spinner .6s linear infinite;

    }

    @keyframes spinner {
      to {traform: rotate(360deg);}
    }

`

export const Section = styled.div` 
  margin-bottom: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
