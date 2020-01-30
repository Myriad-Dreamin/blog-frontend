import backStageIndices from "@/router/auth";

const backstage = {
    path: '/backstage',
    name: 'BackStage',
    component: () => import('@/views/backstage/BackStage'),
    meta: {
        requireAuth: true,
    }
};

const backStageIndices = [
    backstage,
];

backStageIndices.backstage = backstage;

export {backStageIndices};
