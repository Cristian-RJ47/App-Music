import style from './Explore.module.css';

export const Explore = () => {
  return (
    <>
    <div className={style.containerVideo}>
    <iframe width="853" height="480"
    src="https://www.youtube.com/embed/3ssL8vx7Xhg?list=PLgS0SSa1anukbM0QbNBw5IMsFiBYZz7CR" 
    title="Happy and Fun Pop Background Music For Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    </>
  )
}