set -euo pipefail

IMAGE_NAME="original-ferm-front"

CONTAINER_NAME="original-ferm-front-3000"

PORT_HOST=3000
PORT_CONTAINER=3000

ENV_VAR="NEXT_PUBLIC_API_ENDPOINT=https://fermacuorigini.pizza/api"

DOCKERFILE_PATH="../Dockerfile"

if [[ ! -f "${DOCKERFILE_PATH}" ]]; then
    echo "Not found: Dockerfile path ${DOCKERFILE_PATH}"
    exit 1
fi

echo "Creating ${IMAGE_NAME} ..."
echo ""

docker build \
    -f "${DOCKERFILE_PATH}" \
    -t "${IMAGE_NAME}" \
    "$(dirname "${DOCKERFILE_PATH}")" || {
        echo ""
        echo "Image stopped with error ↑"
        echo "Fix problems"
        exit 1
    }

echo ""
echo "Iamge ${IMAGE_NAME} was created / updated"
echo ""


docker stop  "${CONTAINER_NAME}" >/dev/null 2>&1 || true
docker rm    "${CONTAINER_NAME}" >/dev/null 2>&1 || true

echo ""
echo "Start container..."
echo "Container name:${CONTAINER_NAME}"
echo "Base api url:${ENV_VAR}"
echo ""

docker run -d \
    --name "${CONTAINER_NAME}" \
    -p "${PORT_HOST}:${PORT_CONTAINER}" \
    --restart unless-stopped \
    "${IMAGE_NAME}"

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "                          READY"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Server:"
echo "http://localhost:${PORT_HOST}"
