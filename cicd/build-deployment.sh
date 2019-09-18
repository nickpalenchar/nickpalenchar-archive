
[[ -z "$1" ]] && {
    echo "using latest for tag"
    VERSION=latest
} || VERSION=$1


echo "#" > deployment.yml
echo "# This file was automatically generated, do not edit directly!" >> deployment.yml
echo "# Rather, edit \`deployment.yml.template\` and run \`. build-deployment.sh\` to generate" >> deployment.yml
echo "" >> deployment.yml

cat deployment.template.yml | sed "s/%version%/$VERSION/g" >> deployment.yml
