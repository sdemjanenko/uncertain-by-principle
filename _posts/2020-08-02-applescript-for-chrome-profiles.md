---
layout: post
title: "AppleScript for Chrome profiles"
---

Recently, I started looking into automating parts of my workflow on my Mac
computer. Specifically, I want to open a couple webpages in my Default Chrome
profile and a few others in my Work profile. Running `open http://google.com` from
Terminal opens Google’s webpage in the most recently active window of my
browser. In order to open it in a specific profile I need to provide
`--profile-directory` to Chrome when it launches.

I found a [doc](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md)
for how to use AppleScript to create a separate application that launches
Chrome with a specific profile. These docs were a little out of date.  My
version of the script is:

```
set chrome to "\"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\""
do shell script chrome & " --profile-directory=\"Profile 1\"" & " > /dev/null 2>&1 &"
```

For your use, replace `--profile-directory` with the appropriate profile
number you wish to target.

I then exported this AppleScript as an application and named it Google Chrome
(Work). You can update the icon by copying the icon from the upper-left corner
of the Get Info popup for the original Google Chrome app and pasting it into
the icon for your new application.

Now that I have this application, I can easily launch webpages in my work
profile using Alfred.
