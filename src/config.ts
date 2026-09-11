import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: '阿寒的博客',
  description: '西安电子科技大学 · 集成电路专业。记录学习、算法、芯片与生活。',
  website: 'https://neoleramol.github.io/blog/',
  lang: 'zh-CN',
  base: '/blog',
  author: '阿寒',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}

// 路径前缀：自动适配 base（/blog 或 /）
const BASE = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '')

export const HEADER_LINKS: Link[] = [
  {
    name: '文章',
    url: `${BASE}/posts`,
  },
  {
    name: '项目',
    url: `${BASE}/projects`,
  },
  {
    name: '相册',
    url: `${BASE}/photos`,
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: '首页',
    url: `${BASE}/`,
  },
  {
    name: '文章',
    url: `${BASE}/posts`,
  },
  {
    name: '项目',
    url: `${BASE}/projects`,
  },
  {
    name: '标签',
    url: `${BASE}/tags`,
  },
  {
    name: '相册',
    url: `${BASE}/photos`,
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/neoleramol',
    icon: 'icon-[ri--github-fill]',
    count: 20,
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'C/C++',
          icon: 'icon-[skill-icons--cpp]',
          url: 'https://isocpp.org/',
        },
        {
          name: 'Python',
          icon: 'icon-[skill-icons--python]',
          url: 'https://www.python.org/',
        },
        {
          name: 'Verilog',
          icon: 'icon-[mdi--chip]',
          url: 'https://en.wikipedia.org/wiki/Verilog',
        },
        {
          name: 'Git',
          icon: 'icon-[skill-icons--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'Linux',
          icon: 'icon-[skill-icons--linux-dark]',
          url: 'https://www.kernel.org/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[skill-icons--astro]',
          url: 'https://astro.build/',
        },
        {
          name: 'Node.js',
          icon: 'icon-[skill-icons--nodejs-dark]',
          url: 'https://nodejs.org/',
        },
        {
          name: 'React',
          icon: 'icon-[skill-icons--react-dark]',
          url: 'https://react.dev/',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[skill-icons--tailwindcss-dark]',
          url: 'https://tailwindcss.com/',
        },
        {
          name: 'VS Code',
          icon: 'icon-[skill-icons--vscode-dark]',
          url: 'https://code.visualstudio.com/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'neoleramol',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: '文章',
  description: '这里记录我的学习笔记与思考',
  introduce: '集成电路、算法竞赛、技术笔记与生活随笔。',
  author: '阿寒',
  homePageConfig: {
    size: 2,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: '阅读全文',
  prevPageText: '上一页',
  nextPageText: '下一页',
  tocText: '本页目录',
  backToPostsText: '返回文章',
  nextPostText: '下一篇',
  prevPostText: '上一篇',
  recommendText: '推荐',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'gitalk-comment',
    owner: 'neoleramol',
    admin: ['neoleramol'],
    language: 'zh-CN',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: '标签',
  description: '所有文章标签',
  introduce: '这里是全部文章标签，点击可筛选。',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: '项目',
  description: '我做过的项目展示',
  introduce: '这里展示我做过的项目和作品。',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: '相册',
  description: '记录生活中的照片',
  introduce: '这里记录一些日常拍的照片。',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
