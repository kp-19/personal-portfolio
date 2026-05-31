import kp_user_image from './kp_user_img.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import star_icon from './star-icon.png';
import star_icon_dark from './star-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import kp_logo from './kp_logo.png';
import kp_logo_dark from './kp_logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import kp_profile_img from './kp_profile_img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import bg_img from './bg_img.jpg'
import loc_icon from './loc-icon.png'
import loc_icon_dark from './loc-icon-dark.png'
import c_icon from './skills-icons/c.png'
import cplusplus_icon from './skills-icons/c++.svg'
import python_icon from './skills-icons/python.svg'
import sql_icon from './skills-icons/sql.svg'
import java_icon from './skills-icons/java.svg'
import anaconda_icon from './skills-icons/anaconda.svg'
import docker_icon from './skills-icons/docker.svg'
import firebase_icon from './skills-icons/firebase.svg'
import gcp_icon from './skills-icons/gcp.svg'
import opencv_icon from './skills-icons/opencv.svg'
import pytorch_icon from './skills-icons/pytorch.svg'
import springboot_icon from './skills-icons/spring-boot.svg'
import postman_icon from './skills-icons/postman.svg'
import unity_icon from './skills-icons/unity.svg'
import git_icon from './skills-icons/git.svg'
import github_icon from './skills-icons/GitHub.svg'
import fl_icon from './skills-icons/fl.png'
import filmora_icon from './skills-icons/filmora.png'
import canva_icon from './skills-icons/canva.png'

export const assets = {
    kp_user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    star_icon,
    star_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    kp_logo,
    kp_logo_dark,
    mail_icon,
    mail_icon_dark,
    kp_profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    bg_img,
    loc_icon,
    loc_icon_dark,
    github_icon
};

export const workData = [
    {
        title: 'Sentiment Analysis',
        description: 'Twitter sentiment analysis using purely classical machine learning techniques and analysis using multiple tokenizers(BERT and TF-ID).',
        tags: ['Python', 'ML', 'Scikit-Learn'],
        link: 'https://github.com/kp-19/CSL2050-Course-Project',
        bgImage: '/project-1.png',
    },
    {
        title: 'Ocean and Island Exploration Game',
        description: 'Unity-based 3D survival adventure with procedural islands, ship bouyancy mechanics, enemies, and exploration mechanics.',
        tags: ['Unity', 'C#'],
        link: 'https://github.com/kp-19/CG_course_project',
        bgImage: '/work-3.png',
    },
    {
        title: 'ColorSense',
        description: 'A flutter based application to help color-blind people sense color with the help of color labelling of images and color blindness simulator.',
        tags: ['Flutter', 'OpenCV'],
        link: 'https://github.com/kp-19/sw-project-colorsense',
        bgImage: '/project-2.jpeg',
    },
]


export const skillsData = [
    {
        icons: [c_icon, cplusplus_icon, python_icon, java_icon, sql_icon],
        icons_description: ['C', 'C++', 'Python', 'Java', 'SQL'],
        title: 'Languages'
    },
    {
        icons: [springboot_icon, pytorch_icon, opencv_icon, firebase_icon, git_icon],
        icons_description: ['SpringBoot', 'PyTorch', 'OpenCV', 'Firebase', 'Git'],
        title: 'Frameworks & Technologies'
    },
    {
        icons: [anaconda_icon, docker_icon, gcp_icon, postman_icon, unity_icon],
        icons_description: ['Anaconda', 'Docker', 'GCP', 'Postman', 'Unity'],
        title: 'Tools'
    },
    {
        icons: [fl_icon, filmora_icon, canva_icon],
        icons_description: ['fl studio', 'Filmora', 'Canva'],
        title: 'Other Software'
    },
]


export const infoList = [
    { icon: assets.loc_icon, iconDark: assets.loc_icon_dark, title: 'Location', description: 'Pune,\nMaharashtra' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.star_icon, iconDark: assets.star_icon_dark, title: 'Interests', description: 'Software Engineering, AI, Research, Music, Badminton'}
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];