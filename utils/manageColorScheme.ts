const backEndStacks = ['Node.js', 'Express.js'];
const designTools: string[] = ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'];
const collaborationTools: string[] = ['Git', 'Github', 'Slack'];
const deploymentTools: string[] = ['Github Actions', 'AWS Cloudfront/S3', 'Firebase'];

const manageColorScheme = (skill: string): string => {
	if (backEndStacks.includes(skill)) {
		console.log('here');
		return 'text-green-400';
	} else if (collaborationTools.includes(skill)) {
		console.log('here');
		return 'text-orange-200';
	} else if (designTools.includes(skill)) {
		return 'text-purple';
	} else if (deploymentTools.includes(skill)) {
		return 'text-gray-600';
	} else {
		return 'text-blue-200';
	}
};

export default manageColorScheme;
