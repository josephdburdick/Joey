import aoany from '../data/aoa-ny/aoa-ny.md';
import bluechairbay from '../data/bluechairbay/bluechairbay.md';
import ciroc from '../data/ciroc/ciroc.md';
import citizen from '../data/citizen/citizen.md';
import davidsbridal from '../data/davids-bridal/davids-bridal.md';
import gshock from '../data/g-shock/g-shock.md';
import hard from '../data/hard/hard.md';
import macys from '../data/macys/macys.md';
import mtv from '../data/mtv/mtv.md';
import tambaran from '../data/tambaran/tambaran.md';
import wwglass from '../data/wwglass/wwglass.md';

const allProjects = {
  aoany,
  bluechairbay,
  ciroc,
  citizen,
  davidsbridal,
  gshock,
  hard,
  macys,
  mtv,
  tambaran,
  wwglass
};

function getProject(project){
  return allProjects[project];
}

export default { allProjects, getProject };
