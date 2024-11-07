export function About() {
    return (
        <>
            <div className="w-full h-auto bg-gradient-to-b from-teal-900 via-gray-800 to-gray-900 text-gray-100 p-10 md:p-20 flex flex-col items-center">
                <h1 className="text-[40px] md:text-[60px] font-bold text-center text-teal-200 mb-10 tracking-wide">Why This Site</h1>
                <p className="text-[18px] md:text-[20px] leading-relaxed max-w-3xl text-gray-300">
                    Welcome to <strong className="text-teal-300">Live And Song!</strong> Here, we believe in creating an immersive experience that combines technology with seamless functionality. Our platform is designed to connect live streamers with their audiences in a new and interactive way, bringing music requests and real-time engagement to a whole new level.
                </p>
                
                <section className="my-10 max-w-3xl">
                    <h2 className="text-[28px] font-semibold text-teal-300 mt-10 mb-5">Our Mission</h2>
                    <p className="text-[18px] leading-relaxed text-gray-300">
                        Our mission is to empower content creators by allowing their communities to play a direct role in their live streaming experience. Through our unique request and queue system, viewers can request songs to be played during the stream. This innovative approach not only enhances the streaming experience but also deepens the connection between streamers and their audiences.
                    </p>
                </section>

                <section className="my-10 max-w-3xl">
                    <h2 className="text-[28px] font-semibold text-teal-300 mt-10 mb-5">How It Works</h2>
                    <p className="text-[18px] leading-relaxed text-gray-300">
                        <strong>Streamers Start a Live Session:</strong> Streamers can create their unique link by initiating a live session on our platform. This link can be shared with viewers, inviting them to join in.
                        <br /><br />
                        <strong>Viewers Request Songs:</strong> Viewers can search for their favorite songs using our seamless integration with the Spotify API. With a quick payment, they can add the song of their choice to the queue.
                        <br /><br />
                        <strong>Queue Management and Real-Time Playback:</strong> Songs are queued in the order requests are received, and each one plays in real-time on the streamer's feed. Once a song ends, the next request in line automatically starts, creating a dynamic and uninterrupted experience.
                        <br /><br />
                        <strong>Real-Time Updates:</strong> Thanks to real-time WebSocket updates, all viewers stay on the same page with information on the current song and queue list.
                    </p>
                </section>

                <section className="my-10 max-w-3xl">
                    <h2 className="text-[28px] font-semibold text-teal-300 mt-10 mb-5">Our Technology</h2>
                    <p className="text-[18px] leading-relaxed text-gray-300">
                        We leverage the power of the <strong className="text-teal-200">PERN stack (Postgresql, Express, React, Node.js)</strong> to provide a fast, reliable, and interactive experience for our users. This technology stack allows us to create a platform that’s both scalable and secure, handling the high demand of concurrent viewers and real-time song updates with ease.
                        <br /><br />
                        Our integration with the Spotify API gives viewers the freedom to choose from an extensive library of songs, while our payment system ensures a smooth and secure transaction for each request. With the WebSocket protocol, we ensure that every update is shared instantaneously.
                    </p>
                </section>

                <section className="my-10 max-w-3xl">
                    <h2 className="text-[28px] font-semibold text-teal-300 mt-10 mb-5">Our Vision</h2>
                    <p className="text-[18px] leading-relaxed text-gray-300">
                        We envision a world where streaming is not just about broadcasting but about creating a live, interactive experience for everyone involved. Our platform is a step toward this future, where communities can come together in real-time, share their favorite music, and shape the moments that make streaming memorable.
                    </p>
                </section>

                <section className="my-10 max-w-3xl">
                    <h2 className="text-[28px] font-semibold text-teal-300 mt-10 mb-5">Join Us on This Journey</h2>
                    <p className="text-[18px] leading-relaxed text-gray-300">
                        Whether you’re a streamer looking to create a more interactive experience or a viewer who wants to participate directly in your favorite stream, Live And Song has something for you. We’re constantly innovating and adding new features to improve the experience for everyone, and we’re excited to have you as part of our community.
                        <br /><br />
                        Thank you for being part of <strong className="text-teal-300">Live And Song.</strong> Together, let’s make streaming more engaging, one song request at a time!
                    </p>
                </section>
            </div>
        </>
    );
}
