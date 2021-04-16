import { Router } from "express";
import fetch from 'node-fetch';

const router = Router();
router.get("/", async (req, res) => {
    const githubInfo = await fetch(
        "https://api.github.com/users/jscalderon65/repos",
          {
            method: "GET",
            headers: {
              "Accept":"application/vnd.github.mercy-preview+json"
            },
          }
    );
    const result = await githubInfo.json();
    const repoInfo = result.filter(
        (item) => item.name === "rest-api-node-mongo-es10"
    )[0];

    const ProjectInfo = {
        "Name Project":repoInfo.name,
        "Project Description":repoInfo.description,
        "Repository":repoInfo.html_url,
        "Topics":repoInfo.topics,
        "Owner":repoInfo.owner.login,
        "Profile Url":repoInfo.owner.url,
    }
    res.json("Funciona");
});

export default router;
