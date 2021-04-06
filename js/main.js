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
            ev.target.parentNode.scrollBy({
                    behavior:'smooth', 
                    top:0,
                    left:vw*sign
                });
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

            ev.target.style.cursor = 'grab';

            swipe.run(ev);
        }, false);

        //
        slide.addEventListener('mousedown', (ev)=>{

            ev.target.style.cursor = 'grabbing';

            swipe.run(ev);
        }, false);

        //
        slide.addEventListener('mouseout', (ev)=>{

            swipe.startPoint = 0;
            swipe.isStart = true;

            ev.target.style.cursor = 'grab';
        }, false);
    }
});
