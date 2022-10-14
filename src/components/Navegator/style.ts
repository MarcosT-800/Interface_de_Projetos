import styled from 'styled-components'

export const Container = styled.div`

`

export const Navigation = styled.div` 
.navigation {
    position: relative;
    width: 550px;
    height: 120px;
    box-shadow: 25px 25px 25px rgba(0,0,0,0.25), 
    10px 10px 70px rgba(0,0,0,0.25),
    inset 5px 5px 10px rgba(0,0,0,0.5),
    inset 5px 5px 20px rgba(255,255,255,0.2),
    inset -5px -5px 15px rgba(0,0,0,0.75);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navigation li {
    position: relative;
    list-style: none;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    margin: 60px;
    display: block;
}

.navigation li::before {
    content: '';
    position: absolute;
    top: 40px;
    margin-left: 30px;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    background: #222;
    border-radius: 50%;
    transition: 0.5s;
}

.navigation li.active::before {
    background: #0f0;
    box-shadow: 0 0 5px #0f0,
    0 0 10px #0f0,
    0 0 20px #0f0,
    0 0 30px #0f0,
    0 0 40px #0f0,
    0 0 50px #0f0;


}

.navigation li a .icon {
    position: absolute;
    font-size: 1.75em;
    width: 80px;
    height: 80px;
    top: -30px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    transition-delay: 0.2s;

}

.navigation li.active a .icon {
    background: #29fd53;
    color: white;
    transform: translateY(-55px);
    box-shadow: 5px 5px 7px rgba(0,0,0,0.25),
    inset 2px 2px 3px rgba(255,255,255,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
}

.navigation li a .icon:before {
    content: '';
    position: absolute;
    inset: 10px;
    background: #2f363e;
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5),
    inset 2px 2px 3px rgba(255,255,255,0.25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
    transform: scale(0);
    transition: 0.5s;
}

.navigation li.active a .icon:before {
   transform: scale(1);
}

.navigation li a .text{
    position: absolute;
    font-size: 0.75em;
    color: black;
    transform: translateY(20px);
    padding: 2px 10px;
    background: white;
    border-radius: 15px;
    box-shadow: 5px 5px 7px rgba(0,0,0,0,25),
    inset -3px -3px 5px rgba(0,0,0,0.5);
}

.navigation li.active a .text {
    opacity: 1;
    transform: translateY(10px);
    transition-delay: 0.2s;
}
  
`
