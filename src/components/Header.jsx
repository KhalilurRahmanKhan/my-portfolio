import ReactTypingEffect from 'react-typing-effect';
function Header() {
    return (
        <>
            <div class="hero" style={{ height: "calc(100vh - 133px)" }} >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">I am a <ReactTypingEffect
                            text={["Web Developer.", "React Developer!","Laravel Developer"]}
                        /></p>
                        <button class="btn btn-primary">My Resume</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Header;