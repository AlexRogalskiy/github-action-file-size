# *File Size*

> GitHub Action to provide comparison information on file size

[![GitHub marketplace](https://img.shields.io/badge/marketplacegithub-file--size-blue?logo=github)](https://github.com/marketplace/actions/file-size)

[![management: perfekt👌](https://img.shields.io/badge/management-perfekt👌-red.svg)](https://github.com/lekterable/perfekt)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/github-action-file-size)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-file-size/discussions)

[![DeepSource](https://deepsource.io/gh/AlexRogalskiy/github-action-file-size.svg/?label=active+issues\&show_trend=true)](https://deepsource.io/gh/AlexRogalskiy/github-action-file-size/?ref=repository-badge)
[![DeepScan grade](https://deepscan.io/api/teams/11946/projects/16314/branches/347248/badge/grade.svg)](https://deepscan.io/dashboard#view=project\&tid=11946\&pid=16314\&bid=347248)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/github-action-file-size)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/github-action-file-size)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/github-action-file-size?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/github-action-file-size)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/github-action-file-size)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/github-action-file-size)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/github-action-file-size)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/github-action-file-size)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/github-action-file-size/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/github-action-file-size)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/github-action-file-size)
[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/github-action-file-size)
[![Hits-of-Code](https://hitsofcode.com/github/alexrogalskiy/github-action-file-size?branch=master)](https://hitsofcode.com/github/alexrogalskiy/github-action-file-size?branch=master/view?branch=master)
[![dependencies Status](https://status.david-dm.org/gh/AlexRogalskiy/github-action-file-size.svg)](https://david-dm.org/AlexRogalskiy/github-action-file-size)
[![devDependencies Status](https://status.david-dm.org/gh/AlexRogalskiy/github-action-file-size.svg)](https://david-dm.org/AlexRogalskiy/github-action-file-size?type=dev)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/AlexRogalskiy/github-action-file-size.svg?logo=lgtm\&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/github-action-file-size/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AlexRogalskiy/github-action-file-size.svg?logo=lgtm\&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/github-action-file-size/context:javascript)
[![codecov](https://codecov.io/gh/AlexRogalskiy/github-action-file-size/branch/main/graph/badge.svg?token=qzbb9pz8x3)](https://codecov.io/gh/AlexRogalskiy/github-action-file-size)
[![CI](https://github.com/AlexRogalskiy/github-action-file-size/workflows/CI/badge.svg)](https://github.com/AlexRogalskiy/github-action-file-size/actions/workflows/build.yml)
[![CircleCI](https://circleci.com/gh/AlexRogalskiy/github-action-file-size.svg?style=shield)](https://circleci.com/gh/AlexRogalskiy/github-action-file-size)
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/github-action-file-size/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][repo]
[![Public workflows that use this action.][total_usages]][search_results]
[![Licence][license_id]][license_content]

[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/AlexRogalskiy/github-action-file-size/discussions)
[![Open questions](https://img.shields.io/badge/Open-questions-blue.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-file-size/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/AlexRogalskiy/github-action-file-size/labels/bug)

## *Table of contents*

- [*Description*](#description)
- [*Inputs*](#inputs)
  - [`sourceData`](#sourcedata)
  - [`reportName`](#reportname)
  - [`sourceFilePath`](#sourcefilepath)
  - [`targetFilePath`](#targetfilepath)
  - [`sizeUnit`](#sizeunit)
- [*Outputs*](#outputs)
  - [`fileReport`](#filereport)
- [*Examples*](#examples)
- [*Visitor stats*](#visitor-stats)
- [*Licensing*](#licensing)
- [*Authors*](#authors)
- [*Versioning*](#versioning)
- [*Contribution*](#contribution)
- [*Acknowledgement*](#acknowledgement)
- [*Forks*](#forks)
- [*Development Support*](#development-support)

## *Description*

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23323330.svg?&logo=typescript&logoColor=%23F7DF1E" alt="Typescript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/github-action-file-size" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/github-action-file-size" alt="Project updated status" />
    </a>
</p>

Provides comparison report on files size by input parameters.

## *Inputs*

### `sourceData`

**Optional** JSON data source file with action parameters:

#### Complete parameters

```json
[
    {
        "reportName": "african proverbs report",
        "sourceFilePath": "./data/african_proverbs.json",
        "targetFilePath": "./data/african_proverbs_unique.json"
    },
    {
        "reportName": "gypsy proverbs report",
        "sourceFilePath": "./data/gypsy_proverbs.json",
        "targetFilePath": "./data/gypsy_proverbs_unique.json"
    }
]
```

#### Basic parameters

```json
[
    {
        "reportName": "african proverbs report",
        "sourceFilePath": "./data/african_proverbs.json",
        "targetFilePath": "./data/african_proverbs_unique.json",
        "sizeUnit": "kb"
    },
    {
        "reportName": "gypsy proverbs report",
        "sourceFilePath": "./data/gypsy_proverbs.json",
        "targetFilePath": "./data/gypsy_proverbs_unique.json",
        "sizeUnit": "b"
    }
]
```

### `reportName`

**Optional** Report name

### `sourceFilePath`

**Optional** Source file path

### `targetFilePath`

**Optional** Target file path

### `sizeUnit`

**Optional** File size units (any of b|kb|mb|gb|tb|pb)

## *Outputs*

### `fileReport`

JSON representation of files size report

## *Examples*

```yml
- name: File size
  uses: alexrogalskiy/github-action-file-size@master
  with:
    reportName: 'Proverbs File Diff'
    sourceFilePath: './data/african_proverbs.json'
    targetFilePath: './data/african_proverbs_unique.json'
    sizeUnit: 'kb'
```

Running locally:

- `npm run start:action --action github-action-file-size --reportName 'Proverbs File Diff' --sourceFilePath './data/african_proverbs.json' --targetFilePath './data/african_proverbs_unique.json' --sizeUnit 'kb'`

## *Visitor stats*

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fgithub-action-file-size\&count_bg=%2379C83D\&title_bg=%23555555\&icon=\&icon_color=%23E7E7E7\&title=hits\&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/github-action-file-size?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/github-action-file-size?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/github-action-file-size?style=social)

## *Licensing*

***File Size*** is distributed under LGPL version 3 or later,
\[[License](https://github.com/AlexRogalskiy/github-action-file-size/blob/master/LICENSE)]. LGPLv3 is additional
permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## *Authors*

***File Size*** is maintained by the following GitHub team-members:

- [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## *Versioning*

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on
this repository][tags].

## *Contribution*

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/github-action-file-size?size=50\&padding=5\&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/github-action-file-size/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us
([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/github-action-file-size)

See also the list of [contributors][contributors] who participated in this project.

## *Acknowledgement*

[![Stargazers repo roster for @AlexRogalskiy/github-action-file-size](https://reporoster.com/stars/AlexRogalskiy/github-action-file-size)][stars]

## *Forks*

[![Forkers repo roster for @AlexRogalskiy/github-action-file-size](https://reporoster.com/forks/AlexRogalskiy/github-action-file-size)][forkers]

## *Development Support*

Like ***File Size*** ? Consider buying me a coffee :)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square\&logo=patreon\&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

***

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript\&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20github-7116FB.svg?logo=github\&style=for-the-badge)](https://github.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart\&style=for-the-badge)](https://forthebadge.com/)

[repo]: https://github.com/AlexRogalskiy/github-action-file-size

[tags]: https://github.com/AlexRogalskiy/github-action-file-size/tags

[issues]: https://github.com/AlexRogalskiy/github-action-file-size/issues

[pulls]: https://github.com/AlexRogalskiy/github-action-file-size/pulls

[wiki]: https://github.com/AlexRogalskiy/github-action-file-size/wiki

[stars]: https://github.com/AlexRogalskiy/github-action-file-size/stargazers

[forkers]: https://github.com/AlexRogalskiy/github-action-file-size/network/members

[contributors]: https://github.com/AlexRogalskiy/github-action-file-size/graphs/contributors

[license_id]: https://img.shields.io/github/license/AlexRogalskiy/github-action-file-size

[license_content]: https://github.com/AlexRogalskiy/github-action-file-size/blob/master/LICENSE

[total_usages]: https://img.shields.io/endpoint?url=https%3A%2F%2Fapi-git-master.endbug.vercel.app%2Fapi%2Fgithub-actions%2Fused-by%3Faction%3DAlexRogalskiy%2Fgithub-action-file-size%26badge%3Dtrue

[search_results]: https://github.com/search?o=desc&q=AlexRogalskiy/github-action-file-size+path%3A.github%2Fworkflows+language%3AYAML&s=&type=Code
