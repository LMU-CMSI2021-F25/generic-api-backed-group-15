    const container = document.getElementById("container");

    const handleOnDown = (e) => (container.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
        container.dataset.mouseDownAt = "0";
        container.dataset.prevPercentage = container.dataset.percentage;
    }

    const handleOnMove = (e) => {
        if (container.dataset.mouseDownAt === "0") return
        const mouseDelta = parseFloat(container.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2
        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(container.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)
        container.dataset.percentage = nextPercentage
        container.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" })

        for (const image of container.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" })
        }
    }

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);       