<template>
    <div class="container mx-auto">
        <h1 class="title">My Location</h1>
        <h2 class="subtitle">Mauritius 🇲🇺, the paradise island which is located off the southeast coast of the African
            continent in the Indian Ocean.</h2>
        <ul class="radar">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.radar {
    position: relative;
    margin: 0 auto;
    padding: 0;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 20px solid;
    background: #000 url('../assets/images/map.png') no-repeat;
    background-size: cover;
    box-shadow: 0 8px 0 #c5c5c5, inset 0 0 100px rgba(0, 255, 0, 0.5);
    overflow: hidden;
    background-position: center right;
}

.radar::before {
    content: '';
    position: absolute;
    top: 75%;
    left: 37%;
    width: 10px;
    height: 10px;
    background: #00ff00;
    border-radius: 50%;
    filter: blur(2px);
    animation: glow 1s linear infinite;
}

.radar li:nth-child(1),
.radar li:nth-child(2),
.radar li:nth-child(3),
.radar li:nth-child(4) {
    list-style: none;
    position: absolute;
    top: 50%;
    height: 1px;
    width: 100%;
    background: rgba(0, 255, 0, 1);
}

.radar li:nth-child(2) {
    transform: rotate(90deg);
}

.radar li:nth-child(3) {
    transform: rotate(45deg);
}

.radar li:nth-child(4) {
    transform: rotate(-45deg);
}

.radar li:nth-child(5),
.radar li:nth-child(6),
.radar li:nth-child(7) {
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 100%;
    border: 1px solid rgba(0, 255, 0, 1);
    background: transparent;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.radar li:nth-child(5) {
    height: 120px;
    width: 120px;
}

.radar li:nth-child(6) {
    height: 240px;
    width: 240px;
}

.radar li:nth-child(7) {
    height: 360px;
    width: 360px;
}

.radar li:nth-child(8) {
    list-style: none;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 250px;
    width: 250px;
    background: linear-gradient(45deg, #00ff00 0%, transparent 50%);
    animation: animate 2s linear infinite;
    transform-origin: top left;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes glow {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@media (max-width: 500px) {
    .radar {
        width: 320px;
        height: 320px;
        border: 10px solid;
    }
}
</style>