# truffle hackathon: we draw

A fun interactive game for streamers, to get their audience to draw to their heart's content.

With _We Draw_, the streamer sets a topic for everyone to draw. Viewers are given 10 seconds (or however long the streamer wants), and they're in with a chance to win juicy juicy channel points or other prizes!

Produced as part of the Truffle July 2022 hackathon.

Thanks to Riley, Austin and the Truffle team for their assistance, as well as Rae for helping brainstorm the idea.

## features

Made up of 4 features:

1. A Truffle extension mapping for viewers, which allows the viewer to take part
2. A page which allows moderator role users on the stream to approve/deny submissions
3. An admin panel for the streamer which allows triggering the submission stage, picking a "winner", and defining the parameters (e.g the prompt, the time to complete the drawing, the # of points the winner gets), and a controller for what is visible on feature #4
4. an OBS overlay displaying the currently selected drawing (out of scope of the hackathon)

## data structure

At the root, we store an array of `Competitions`. Each competition has two timestamps (created date and 'expiry date', aka when the submission period closes) and an array of `Submissions`. Each `Submission` has the drawing data encoded in base64 as well as the author data, timestamp of submission and a nullable boolean representing whether the submission was approved (true), denied (false) or not yet filtered (null).

## status

* Basic UI completed
* No backend done lol

## licence

TBC - currently no licence