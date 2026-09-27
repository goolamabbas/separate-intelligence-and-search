# Your first research task with ChatGPT and TinyFish

**Choose a free video-meeting tool for a small community group.** This walkthrough connects one research provider, adds the routing skill, and shows the answer produced from a real Search and Fetch run.

**Tested 27 September 2026:** ChatGPT desktop on macOS, with TinyFish already connected and `multi-provider-research` v0.4.1 installed. Search and Fetch both returned useful evidence. Fresh account creation and plugin authorization were not repeated. The comparison checks published documentation; it is not a hands-on meeting test.

[Back to the guide](README.md) · [All connection options](connecting-providers.md)

## 1. Connect TinyFish in ChatGPT

You need a TinyFish account and a ChatGPT environment that supports the plugin. For the complete skill-based path below, use the **ChatGPT desktop app with local skill support**. OpenAI distinguishes standalone desktop skills from skills distributed through plugins across its other interfaces. [OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills)

1. Open [TinyFish’s official ChatGPT installation instructions](https://docs.tinyfish.ai/plugins#chatgpt).
2. Follow **Add TinyFish to ChatGPT**, then **Install plugin**.
3. Complete the TinyFish account sign-in and authorization when prompted. This documented plugin route uses OAuth; you do not paste an API key into your chat.
4. Return to ChatGPT. If TinyFish is already connected, keep that connection and continue below.

These steps follow TinyFish’s documentation, checked on the date above. The connection used for our example was already installed. A successful research request below is the useful access check; there is no need to run a separate duplicate search first.

**What is free?** TinyFish documents Search at up to **30 requests per minute** and Fetch at up to **150 URLs per minute** on its wallet-based tier, including a zero wallet balance. Search and Fetch are separate from metered browser automation. Your ChatGPT plan and model usage still apply. These are published terms, not a billing measurement from this run. [Free-tier terms](https://www.tinyfish.ai/blog/search-and-fetch-are-now-free-for-every-agent-everywhere) · [Search](https://docs.tinyfish.ai/search-api) · [Fetch](https://docs.tinyfish.ai/fetch-api)

## 2. Add the research-routing skill

The TinyFish plugin supplies tools. The separate `multi-provider-research` skill supplies instructions for choosing and using research tools. Installing one does not install the other.

In a ChatGPT desktop task with local file access, you can ask:

```text
Install the multi-provider-research skill from https://github.com/goolamabbas/multi-provider-research, release v0.4.1, using its skills/multi-provider-research folder. Install the complete folder in my personal skills location, preserve its supporting files, and back up any existing version before replacing it. Confirm the installed files match the release.
```

This is an installation request, not a research prompt. Version v0.4.1 is the version used here. For later releases, consult the [skill repository’s installation instructions](https://github.com/goolamabbas/multi-provider-research#install).

For manual installation on the macOS setup used here: download and unpack the release, then copy the inner `skills/multi-provider-research` folder to `~/.agents/skills/multi-provider-research`. Keep `SKILL.md`, `references/`, and `agents/` together. Back up and replace an older folder instead of merging files into it. This personal path was verified in our ChatGPT desktop setup; it is not a browser upload path or a universal installation path for every ChatGPT surface.

Open **Skills** in the desktop sidebar to look for the skill, or ask ChatGPT to confirm that it can load `multi-provider-research`. Start a fresh task if necessary. OpenAI documents desktop standalone skills and skill selection through `@`; the natural-language invocation in this guide avoids dependence on a particular mention syntax. [OpenAI skill documentation](https://learn.chatgpt.com/docs/build-skills)

Before this research run, the installed folder’s 11 files were verified against the published v0.4.1 package after backing up the previous installation. If your ChatGPT environment cannot load a local skill, do not assume that pasting its name installs it: use a supported desktop setup for this walkthrough.

## 3. Ask a useful question

Copy this into ChatGPT after the connection and skill are available:

```text
Use the multi-provider-research skill with only TinyFish Search and Fetch.

Compare the free versions of Google Meet and Zoom for a weekly, one-hour discussion with six people. Check meeting-duration limits, whether guests can join from a browser, and screen sharing. Use official sources, recommend the better fit, and flag anything you cannot verify.
```

This example uses a real-life product choice rather than an AI-policy question. The limits are deliberate: only TinyFish Search and Fetch, official sources, and three comparison criteria. It does not authorize paid browser automation or starting a meeting.

## 4. Read the answer from this run

**ChatGPT’s synthesis of the retrieved sources:** Google Meet is the better fit for this particular free, six-person discussion. Its published free meeting limit reaches 60 minutes; Zoom Basic’s is 40 minutes. A full hour leaves no allowance for an overrun on Meet, so plan a slightly shorter discussion if the group needs time for introductions.

| What matters | Google Meet, no-cost version | Zoom Workplace Basic |
| --- | --- | --- |
| Six people for one hour | Up to 100 participants and 60 minutes. Meets the stated duration, without extra time. [Google](https://workspace.google.com/products/meet/) | Up to 100 participants and 40 minutes. Does not cover an uninterrupted hour. [Zoom](https://www.zoom.com/en/products/virtual-meetings/features/free-video-conferencing/) |
| Join from a computer browser | Supported without installing software. Guests can sign in with Google or be admitted by the organizer. [Google](https://workspace.google.com/products/meet/) | Supported through the Web App. The browser-join link is enabled by default but can be disabled; it is unavailable for meetings with end-to-end encryption enabled. Guest access can also depend on authentication settings. [Browser access](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067293) · [Account requirements](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063407) |
| Screen sharing | Present a tab, window, or screen; host controls and device permissions can restrict it. [Google help](https://support.google.com/meet/answer/9308856?hl=en&co=GENIE.Platform%3DDesktop) | Included in the free plan; hosts control who can share. The Web App also provides a Share control. [Free-plan features](https://www.zoom.com/en/products/virtual-meetings/features/free-video-conferencing/) · [Web App](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064261) |

**Recommendation:** use Google Meet for the stated one-hour format. Zoom Basic remains an option if the group changes to sessions within its 40-minute limit. This is a recommendation based on documented limits, not a claim that one service has better call quality.

**What remains unverified:** neither service was used to host a meeting; guest admission, screen sharing, device compatibility, and call quality were not tested on participants’ devices. Check host settings before inviting the group.

## 5. Check what the tools actually did

TinyFish found and retrieved the sources. ChatGPT wrote the comparison and recommendation. No TinyFish Agent or browser-automation operation was used.

| Comparison activity | Observed result |
| --- | --- |
| TinyFish Search | 3 calls: one for each product, then one focused search for missing screen-sharing and browser-access details. Each returned 10 results; only relevant official product/help pages were used. |
| TinyFish Fetch Content | 2 batch calls covering 6 distinct official URLs. All six returned page content, with empty error lists. Live fetching was requested with `ttl: 0`; retrieval time is not the same as a source’s publication date. |
| Other research providers or native web tools | None used for the comparison. |
| Actual billed amount | Not returned by these tools. Published Search/Fetch terms imply no TinyFish retrieval charge within the stated limits; the run did not independently measure billing. |

The tool identifiers were `tinyfish_search` and `tinyfish_fetch_content`. A documented tool name or installed plugin alone would not establish success; completed results did.

The separate work to verify this walkthrough’s installation and pricing instructions used **1 additional Search call and 2 Fetch calls covering 6 documentation URLs**. Those are excluded from the comparison counts above. No failed provider calls or substitutions occurred in either set. [Download the call ledger](case-studies/tinyfish-beginner/call-ledger.json).

This was one worked example in an existing ChatGPT conversation, not a fresh-session benchmark or a comparison against another research provider. Another run may select different sources or require more calls. The installation and usage evidence establish different things: release-file verification confirms the installed package; this research run confirms useful Search and Fetch results.

## If something is missing

- **TinyFish is not available:** check installation and authorization. Report the gap; do not silently switch to another provider under this prompt’s “only” restriction.
- **Only automation is exposed:** stop and check the integration. This example needs Search and Fetch and does not require a paid automation run.
- **The skill cannot be found:** check that the inner skill folder and supporting files were installed in the location your desktop setup uses.
- **A source cannot be read:** report the missing evidence and complete the parts supported by accessible official sources. Do not invent a result.

## Try your own version

Keep the structure and change the decision: two note-taking tools for a study group, two public museums for a weekend visit, or two developer tools for a small project. Specify what matters to you, prefer original sources, and check the answer’s limitations.

[More research prompts](research-prompts.md) · [Choosing a provider](choosing-providers.md)

TinyFish also documents a Claude directory connection, a Grok CLI marketplace plugin, and a separate Grok web connector route. Those routes were not tested in this walkthrough. [Other TinyFish installation routes](https://docs.tinyfish.ai/plugins)
