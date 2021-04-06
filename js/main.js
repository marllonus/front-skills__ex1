//add swipe by js on slides

document.addEventListener('DOMContentLoaded', (ev)=>{

    const swipe = {
        startPoint : 0,
        isStart : true,

        _start(ev){
            this.startPoint = ev.x;
        },
        _end(ev){
            const dx = this.startPoint - ev.x;
            const sign = dx > 0 ? 1 : -1;

            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            ev.target.parentNode.scrollBy(sign*vw, 0);
        },
        run(ev){
            
            this.isStart ? this._start(ev) : this._end(ev);
            this.isStart = !this.isStart;
        }
    };

    const slides = document.querySelectorAll('.slide');
    if (!slides) return

    for(const slide of slides)
    {
        //
        slide.addEventListener('mouseup', (ev)=>{

            swipe.run(ev);

            ev.target.style.cursor = 'grab';
        }, false);

        //
        slide.addEventListener('mousedown', (ev)=>{

            swipe.run(ev);

            ev.target.style.cursor = 'grabbing';
        }, false);
    }

});
