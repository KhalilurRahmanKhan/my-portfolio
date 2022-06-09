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
                            text={["Web Developer.", "React Developer!", "Laravel Developer"]}
                        /></p>
                        <a class="btn btn-primary" href="https://drive.google.com/file/d/1g57xvdgHgMaiRAY-povb1Mjg35XrpO0T/view?usp=sharing" target="_blank">My resume</a>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;