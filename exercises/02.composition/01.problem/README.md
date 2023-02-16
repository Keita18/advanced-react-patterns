# Composition and Layout Components

In this exercise we've got a simple user interface with several components
necessitating passing state and updaters around. We're going to restructure
things so we pass react elements instead of state and updaters. We might be
going a _tiny_ bit overboard, but the goal is for this to be instructive for
you.

By the time you're done, the whole UI should look and function exactly as
before, but you'll get a sense for how to use this pattern. The tests will be
there just for you to verify you haven't broken anything that should be working
if you want to use them.

<section id="files" className="not-prose">
  <h2>Files</h2>

  <ul>
    <li data-state="modified">
      <span>modified</span>

      <LaunchEditor workshopFile="exercises/02.composition/01.problem/index.tsx">
        <code>index.tsx</code>
      </LaunchEditor>
    </li>

  </ul>
</section>
