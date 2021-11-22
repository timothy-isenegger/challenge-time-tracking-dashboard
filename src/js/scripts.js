const challengeTimeTracking = {
    init: () => {
        challengeTimeTracking.config = {
            navItems: document.querySelectorAll('.btn-link'),
        }

        challengeTimeTracking.setup();
    },

    setup: () => {
        challengeTimeTracking.registerEventHandlers();
    },

    registerEventHandlers: () => {
        challengeTimeTracking.config.navItems.forEach((navItem) => {
            navItem.addEventListener('click', () => {
                challengeTimeTracking.removeActiveClassFromNavItems();
                navItem.classList.add('active');
                document.querySelectorAll('[data-cycle]').forEach(item => item.classList.remove('active-cycle'));
                document.querySelectorAll(`[data-cycle="${navItem.dataset.cycleType}"]`).forEach(item => item.classList.add('active-cycle'));
            });
        });
    },

    removeActiveClassFromNavItems: () => {
        challengeTimeTracking.config.navItems.forEach(item => item.classList.remove('active'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    challengeTimeTracking.init();
});